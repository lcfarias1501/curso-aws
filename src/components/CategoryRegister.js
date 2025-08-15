import { Button, Card, CardContent, TextField } from '@mui/material'
import React from 'react'

export default function CategoryRegister(props) {
  return (
    <div>
      <Card>
            <CardContent style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>

                <h1>{props.texto}</h1>

                <TextField id="category-name" variant="outlined" label="Nome da Categoria" />

                <Button variant='contained'>Salvar</Button>

            </CardContent>
        </Card>
    </div>
  )
}
