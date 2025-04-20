import ApiService from "../common/api.service";

class OrderDetailService {
    api = new ApiService()
    
    async calculate(request: CalculateRequest[]): Promise<ApiResponse<CalculateResponse>> {
        const response = await this.api.post<CalculateResponse>(`/order-detail/calculate`, request);
        return response;
    }   

    async registerOrder(request: CreateOrderDetailRequest): Promise<ApiResponse<CreateResponse>> {
        const response = await this.api.post<CreateResponse>(`/order-detail`, request);
        return response;
    }
}

export default OrderDetailService;