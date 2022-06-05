import { ApiProperty, OmitType } from '@nestjs/swagger';

export class ProductByCategoryDto {
    @ApiProperty()
    categoryId: string;

    @ApiProperty()
    start: string;

    @ApiProperty()
    size:string;
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
    @ApiProperty({ type: [ProductByCategoryDto] })
    results: ProductByCategoryDto[];
}