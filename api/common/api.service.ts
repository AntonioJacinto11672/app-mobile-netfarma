class ApiService {
    baseURL: string;

    constructor(baseURL: string = "http://localhost:8000/api") {
        this.baseURL = baseURL;
    }

    private async request(method: string, url: string, data?: any) {
        const response = await fetch(this.baseURL + url, {
            method,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    }

    async get<T>(url: string): Promise<ApiResponse<T>> {
        return this.request('GET', url);
    }

    async post<T>(url: string, data: any): Promise<ApiResponse<T>> {
        return this.request('POST', url, data);
    }

    async put<T>(url: string, data: any): Promise<ApiResponse<T>> {
        return this.request('PUT', url, data);
    }

    async delete<T>(url: string): Promise<ApiResponse<T>> {
        return this.request('DELETE', url);
    }

    async patch<T>(url: string, data: any): Promise<ApiResponse<T>> {
        return this.request('PATCH', url, data);
    }

    async getWitch<T>(endpoint: string, accessToken: string): Promise<ApiResponse<T>> {
        console.log("token  ", accessToken);
        const response = await fetch(`${this.baseURL}${endpoint}`, {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        });

        const data = await response.json();
        if (!response.ok) {
            return { error: data };
        }

        console.log(data);
        return { data };
    }
}


export default ApiService;