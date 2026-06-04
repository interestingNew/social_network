import { instance } from "../common/instance"

export const authAPI = {
   getAuth() {
      return instance.get(`auth/me`)
   }
}

export const profileAPI = {
   getProfile(userId: string) {
      return instance.get(`profile/${userId}`)
   }
}

export const usersAPI = {
   getUsers(currentPage: number, pageSize: number) {
      return instance.get(`users?page=${currentPage}&count=${pageSize}`)
   },
   followUser(userId: number) {
      return instance.post(`follow/${userId}`)
   },
   unfollowUser(userId: number) {
      return instance.delete(`follow/${userId}`)
   }
}