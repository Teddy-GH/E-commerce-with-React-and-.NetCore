export interface MetaData {
    currentPage:number;
    totalPages:number;
    pageSize:number;
    totalCount:number;
  
}


export class PaginatedResponse<T> {
items:T;
pagination:MetaData;

constructor(items:T, pagination:MetaData){
    this.items = items;
    this.pagination = pagination;
}
}