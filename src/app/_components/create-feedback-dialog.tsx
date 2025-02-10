import { Button } from './ui/button'
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from './ui/form'
import { Input } from './ui/input'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Textarea } from './ui/textarea'
import { createFeedback } from '../_actions/create-feedback'

interface CreateFeedbackDialogProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  defaultValues?: FormSchema
  projectId: string
}

const formSchema = z.object({
  name: z.string().trim().min(1, { message: 'Nome é obrigatório' }),
  feedback: z.string().trim().min(5, { message: 'Comentário é obrigatório' }),
})

type FormSchema = z.infer<typeof formSchema>

const CreateFeedbackDialog = ({
  isOpen,
  setIsOpen,
  defaultValues,
  projectId,
}: CreateFeedbackDialogProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? {
      name: '',
      feedback: '',
    },
  })

  const onSubmit = async (data: FormSchema) => {
    try {
      await createFeedback({
        ...data,
        projectId,
      })
      setIsOpen(false)
      form.reset()
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Dialog
      open={isOpen}
      onOpenChange={(open) => {
        setIsOpen(open)
        if (!open) {
          form.reset()
        }
      }}>
      <DialogTrigger asChild></DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Criar comentário sobre o projeto.</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="feedback"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deixe seu comentário</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[250px]"
                      placeholder="Deixe seu comentário..."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Seu nome</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite seu nome..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button type="button" variant="outline">
                  Cancelar
                </Button>
              </DialogClose>

              <Button type="submit">Adicionar</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default CreateFeedbackDialog
