export class LoginRequest {
  email: string
  password: string

  constructor(email: string, password: string) {
    this.email = email
    this.password = password
  }
}

export class LoginResponse {
  token: string
  expire: Date
  userId: number
  nickname: string

  constructor(token: string, expire: number, userId: number, nickname: string) {
    this.token = token
    this.expire = new Date(expire)
    this.userId = userId
    this.nickname = nickname
  }
}
