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
import { upsertProject } from '../_actions/upsert-project'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select'
import { DEADLINE_OPTIONS } from '../_constants/Deadline_options'
import { DeadlineOpton } from '@prisma/client'
import { toast } from 'sonner'

interface UpsertProjectDialogProps {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  defaultValues?: FormSchema
  projectId?: string
}

const phoneRegex = new RegExp(
  /^1\d\d(\d\d)?$|^0800 ?\d{3} ?\d{4}$|^(\(0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d\) ?|0?([1-9a-zA-Z][0-9a-zA-Z])?[1-9]\d[ .-]?)?(9|9[ .-])?[2-9]\d{3}[ .-]?\d{4}$/gm
)

const formSchema = z.object({
  fornecedor: z.string().trim().min(1, { message: 'Fornecedor é obrigatório' }),
  name: z.string().trim().min(1, { message: 'Nome é obrigatório' }),
  description: z.string().trim().min(5, { message: 'Descrição é obrigatório' }),
  phones: z
    .string()
    .regex(phoneRegex, { message: 'Formato do número de telefone incorreto' }),
  region: z.string().trim().min(1, { message: 'Região é obrigatório' }),
  deadline: z.nativeEnum(DeadlineOpton, {
    required_error: 'Prazo é obrigatório',
  }),
})

type FormSchema = z.infer<typeof formSchema>

const UpsertProjectDialog = ({
  isOpen,
  setIsOpen,
  defaultValues,
  projectId,
}: UpsertProjectDialogProps) => {
  const form = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: defaultValues ?? {
      fornecedor: '',
      phones: '',
      region: '',
      name: '',
      description: '',
    },
  })

  const onSubmit = async (data: FormSchema) => {
    try {
      await upsertProject({ ...data, id: projectId })
      setIsOpen(false)
      form.reset()
      toast.success('Projeto criado ou atualizado com sucesso')
    } catch (error) {
      console.error(error)
      toast.error('Erro ao criar ou atualizar projeto')
    }
  }

  const isUpdate = Boolean(projectId)

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
          <DialogTitle>{isUpdate ? 'Atualizar' : 'Criar'} projeto</DialogTitle>
          <DialogDescription>Insira as informações abaixo</DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="fornecedor"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Fornecedor</FormLabel>
                  <FormControl>
                    <Input placeholder="Digite o fornecedor..." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="phones"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input placeholder="(99) 99999-9999" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="region"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Região de atendimento</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite a região de atendimento..."
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
                  <FormLabel>Título</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Digite o título do projeto..."
                      {...field}
                    />
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
                  <FormLabel>Descrição</FormLabel>
                  <FormControl>
                    <Textarea
                      className="h-[150px]"
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
              name="deadline"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Prazo de validade do projeto</FormLabel>
                  <Select onValueChange={field.onChange}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {DEADLINE_OPTIONS.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
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

              <Button type="submit">
                {isUpdate ? 'Atualizar' : 'Adicionar'}
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  )
}

export default UpsertProjectDialog
