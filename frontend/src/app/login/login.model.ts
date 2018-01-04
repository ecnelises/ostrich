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

  constructor(token: string, expire: number) {
    this.token = token
    this.expire = new Date(expire)
  }
}
