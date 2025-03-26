async function getProducts() {
    try {
        const response = await fetch("http://localhost:3001/products", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Error fetching users');
        }

        const users = await response.json();
        return users;
    } catch (error) {
        console.error('Error fetching users:', error);
        throw error;
    }
}



//////////LLAMADO POST//////////

async function postProducts(nombreCentro,direccionCentro,horaApertura,horaCierre,fechaInicio,fechaFin) {
    try {
     
        const userData = { 
            nombreCentro,
            direccionCentro,
            horaApertura,
            horaCierre,
            fechaInicio,
            fechaFin
        };



        const response = await fetch("http://localhost:3001/products", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();

        
    } catch (error) {
        console.error('Error posting user:', error);
        throw error;
    }
}



//////////////LLAMADO UPDATE/////////////


async function updateProducts(nombre,correo,contraseña,id) 
{
    try {
     
        const userData = { 
            nombre,
            correo,
            contraseña
        
        };


        


        const response = await fetch("http://localhost:3001/products/"+id, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });

     
        return await response.json();
    } catch (error) {
        console.error('Error update user:', error);
        throw error;
    }
}





//////////////LLAMADO DELETE/////////////


async function deleteProducts(id) {
    try {
        const response = await fetch(`http://localhost:3001/products/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${id}`);
        }

        return { message: `User with id ${id} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { getProducts, postProducts, updateProducts, deleteProducts };