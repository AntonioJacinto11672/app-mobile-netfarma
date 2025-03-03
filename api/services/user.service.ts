import ApiService from "../common/api.service";

class UserService {
    api = new ApiService()

    async signIn(email: string, password: string): Promise<ApiResponse<SignInResponse>> {
        const signInRequest: SignInRequest = {
            email,
            password
        };
        const response = await this.api.post<SignInResponse>('/users/sign-in', signInRequest);
       /*  console.log("teste quero o resultado", response) */
        return response;
    }

    async singUp(email: string, password: string, phoneNumber: string): Promise<ApiResponse<CreateUserResponse>> {
        const userRequest: CreateUserRequest = {
            email,
            password,
            phoneNumber
        };

        const response = await this.api.post<CreateUserResponse>('/users/client', userRequest);
        return response;
    }

    async getUserInfo(accessToken: string): Promise<ApiResponse<UserResponse>> {

        const response = await this.api.getWitch<UserResponse>('/users/user-info', accessToken);
        return response;
    }

    async updateUser(email: string, password: string, phoneNumber: string) {
        const result = await this.api.put('/users', { email, password, phoneNumber });
        console.log(result);
        return result;
    }

    
    async forgotPassword(email: string) {
        const result = await this.api.post('/users/forgot-password', { email });
        console.log(result);
        return result;
    }

    async resetPassword(email: string, password: string) {
        const result = await this.api.post('/users/reset-password', { email, password });
        console.log(result);
        return result;
    }

    async verifyEmail(email: string) {
        const result = await this.api.post('/users/verify-email', { email });
        console.log(result);
        return result;
    }

    async verifyPhoneNumber(phoneNumber: string) {
        const result = await this.api.post('/users/verify-phone-number', { phoneNumber });
        console.log(result);
        return result;
    }

    async verifyCode(code: string) {
        const result = await this.api.post('/users/verify-code', { code });
        console.log(result);
        return result;
    }





}

export default UserService;