import { Controller, Get } from '@nestjs/common';

@Controller('products')
export class ProductsController {

    @Get('/getAll')
    getAll(): string{
        return 'getAll'
    }
    @Get(':id')
    getID(): string{
        return 'getAll'
        }

}
 