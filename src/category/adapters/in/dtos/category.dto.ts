import { ApiProperty, OmitType } from '@nestjs/swagger';

export class CategoryDto {
    @ApiProperty()
    categoryId: string;

    @ApiProperty()
    name: string;
}

class ConfigResponse {
    
    @ApiProperty({ type: [] })
    results: any = {};
};

export class GetCategoryResponse extends OmitType(ConfigResponse, ['results'] as const) {
    @ApiProperty({ type: [CategoryDto] })
    results: CategoryDto[];
}