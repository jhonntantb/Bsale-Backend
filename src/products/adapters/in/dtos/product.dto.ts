import { ApiProperty, OmitType } from '@nestjs/swagger';

export class ProductDto {
    @ApiProperty()
    name: string;

    @ApiProperty()
    url_image: string;

    @ApiProperty()
    price:string;

    @ApiProperty()
    discount:number;

    @ApiProperty()
    category:number;
}

export class PaginationDto {
    @ApiProperty()
    start: string;
    size: string;
}

class ConfigResponse {
    @ApiProperty()
    totalItems: number;

    @ApiProperty()
    start: string;

    @ApiProperty()
    size: string;
    
    @ApiProperty({ type: [] })
    results: any = {};
};

export class ProductSearchResponse extends OmitType(ConfigResponse, ['results'] as const) {
    @ApiProperty({ type: [ProductDto] })
    results: ProductDto[];
}