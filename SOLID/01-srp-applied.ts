interface Product { 
    id:   number;
    name: string;
}

class ProductService {

    private httpAdapter: Object;

    getProduct(id:number){

    }

    saveProduct(product: Product){

    }

}

class Mailer {
    sendEmail() {
        console.log('Enviando correo a los clientes');
    }
}

// Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
// Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
class ProductBloc {

    private productService: ProductService;
    private mailer: Mailer;

    constructor(productService:ProductService, mailer: Mailer){
        this.productService = productService;
        this.mailer = mailer
    }

    loadProduct( id: number ) {
        // Realiza un proceso para obtener el producto y retornarlo
        console.log('Producto: ',{ id, name: 'OLED Tv' });
        this.productService.getProduct(10)
    }

    saveProduct( product: Product ) {
        // Realiza una petición para salvar en base de datos 
        console.log('Guardando en base de datos', product );
        this.productService.saveProduct(product)
    }

    notifyClients() {
        console.log('Notificando a los clientes')
        this.mailer.sendEmail()
    }

}

class CartBloc {
    onAddToCart( productId: number ) {
        // Agregar al carrito de compras
        console.log('Agregando al carrito ', productId );
    }
}


const productServices = new ProductService()
const mailer = new Mailer()
const productBloc = new ProductBloc(productServices, mailer);
const cartBloc = new CartBloc();
const emailer = new Mailer()
productBloc.loadProduct(10);
productBloc.saveProduct({ id: 10, name: 'OLED TV' });
//productBloc.notifyClients();
//productBloc.onAddToCart(10);

cartBloc.onAddToCart(10);
emailer.sendEmail()