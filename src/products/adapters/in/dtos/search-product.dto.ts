import { ApiProperty, OmitType } from '@nestjs/swagger';

export class ProductSearchDto {
    @ApiProperty()
    search: string;

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
    @ApiProperty({ type: [ProductSearchDto] })
    results: ProductSearchDto[];
}