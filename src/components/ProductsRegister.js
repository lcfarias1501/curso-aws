import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'

export default function ProductsRegister(props) {
    return (
        <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <h1>{props.texto}</h1>

                <TextField id="product-name" variant="outlined" label="Nome do Produto" />
                <TextField id="product-price" variant="outlined" label="Preço do Produto" />
                <TextField id="product-category" variant="outlined" label="Categoria do Produto" />

                <Button variant='contained'>Salvar</Button>

            </CardContent>
        </Card>
    )
}
