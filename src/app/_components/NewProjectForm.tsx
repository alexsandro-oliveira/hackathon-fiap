'use client'

import { useForm } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem, FormMessage } from './ui/form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { toast } from 'sonner'

const formSchema = z.object({
  name: z.string().min(5, {
    message: 'O título deve conter o mínimo de 5 caracteres.',
  }),
  description: z.string().min(10, {
    message: 'O conteúdo deve conter o mínimo de 10 caracteres.',
  }),
  supplier: z.string().min(5, {
    message: 'O fornecedor deve conter o mínimo de 5 caracteres.',
  }),
})

export const NewProjectForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      description: '',
      supplier: '',
    },
  })

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      console.log(data)
      toast.success('Projeto criado com sucesso!')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao criar Projeto.')
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Título..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Textarea
                  className="h-[250px]"
                  placeholder="Descreva seu projeto..."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="supplier"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Fornecedor..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Criar</Button>
      </form>
    </Form>
  )
}
