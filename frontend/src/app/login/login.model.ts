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

  constructor(token: string, expire: number, userId: number) {
    this.token = token
    this.expire = new Date(expire)
    this.userId = userId
  }
}
