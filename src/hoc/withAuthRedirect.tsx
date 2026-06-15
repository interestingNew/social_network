import { Navigate } from 'react-router-dom';
import React from 'react';
import { StateType } from '../redux/state-redux';
import { connect, ConnectedProps } from 'react-redux';

const mapStateToPropsForRedirect = (state: StateType) => {
   return {
      isAuth: state.auth.isAuth
   };
};

const connector = connect(mapStateToPropsForRedirect)
type PropsFromRedux = ConnectedProps<typeof connector>

export const withAuthRedirect = <T extends object>(Component: React.ComponentType<T>) => {

      const RedirectComponent = (props: PropsFromRedux & Omit<T, keyof PropsFromRedux>) => {
         if(!props.isAuth) return <Navigate to={'/login'} replace/>
         return <Component {...props as T} />
      }

      const ConnectedRedirectComponent = connector(RedirectComponent as React.ComponentType<any>);
      return ConnectedRedirectComponent as React.ComponentType<Omit<T, keyof PropsFromRedux>>;

}

