// Product Constructor
class Product {
    constructor(name, fab, cat, quant, valor) {
        this.name = name;
        this.fab = fab;
        this.cat = cat;
        this.quant = quant;
        this.total = quant*valor;

    }
}

// UI Constructor
class UI {
    addProduct(product) {
        const productList = document.getElementById('product-list');
        const element = document.createElement('div');
        console.log(product)
        element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Nome do Produto</strong>: ${product.name} -
                    <strong>\nFabricante</strong>: ${product.fab} -<br> 
                    <strong>Categoria</strong>: ${product.cat} -
                    <strong>Quantidade</strong>: ${product.quant} -
                    <strong>Total</strong>: ${product.total} 
                    <a href="#" class="btn btn-danger" name="delete">Delete</a>
                </div>
            </div>
        `;
        productList.appendChild(element);
    }

    resetForm() {
        document.getElementById('product-form').reset();
    }

    deleteProduct(element) {
        if (element.name === 'delete') {
            element.parentElement.parentElement.remove();
            this.showMessage('Produto deletado com sucesso', 'success');
        }
    }

    showMessage(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        // Show in The DOM
        const container = document.querySelector('.container');
        const app = document.querySelector('#App');
        // Insert Message in the UI
        container.insertBefore(div, app);
        // Remove the Message after 3 seconds
        setTimeout(function () {
            document.querySelector('.alert').remove();
        }, 3000);
    }
}

// DOM Events
document.getElementById('product-form')
    .addEventListener('submit', function (e) {

        const name = document.getElementById('name').value,
            fab = document.getElementById('fab').value,
            cat = document.getElementById('cat').value,
            quant = document.getElementById('quant').value,
            valor = document.getElementById('valor').value;

        // Create a new Oject Product
        const product = new Product(name, fab, cat, quant, valor);

        // Create a new UI
        const ui = new UI();

        // Input User Validation
        if (name === '' || fab === '' || cat === '' || quant ==='' || valor ==='')  {
            ui.showMessage('Please Insert data in all fields', 'danger');
        }

        // Save Product
        ui.addProduct(product);
        ui.showMessage('Produro adicionado com sucesso', 'success');
        ui.resetForm();

        e.preventDefault();
    });

document.getElementById('product-list')
    .addEventListener('click', function (e) {
        const ui = new UI();
        ui.deleteProduct(e.target);
        e.preventDefault();
    });

document.getElementById(quant)

    
;