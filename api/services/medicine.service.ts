import ApiService from "../common/api.service";

class useMedicine {
    api = new ApiService()




    async getAllMediciine(pageSize: any = 10, pageNumber: any = 1): Promise<ApiResponse<MedicineResponse[]>> {
        const response = await this.api.get<MedicineResponse[]>(`/medicines?pageSize=${pageSize}&pageNumber=${pageNumber}`);
        return response;
    }

    async getMedicineById(medicineId: string): Promise<ApiResponse<MedicineResponse>> {
        const response = await this.api.get<MedicineResponse>(`/medicines/${medicineId}`);
        return response;
    }


    async getMedicineByCategory(id: string): Promise<ApiResponse<MedicineResponse[]>> {
        const response = await this.api.get<MedicineResponse[]>(`/medicines/category/${id}`);
        return response;
    }

    async getMedicineByProvider(providerId: string): Promise<ApiResponse<MedicineResponse[]>> {
        const response = await this.api.get<MedicineResponse[]>(`/medicines/provider/${providerId}`);
        return response;
    }
}

export default useMedicine;