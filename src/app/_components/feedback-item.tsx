import { db } from '../_lib/prisma'
import { format, formatDistance } from 'date-fns'
import { ptBR } from 'date-fns/locale'

interface FeedbackProps {
  projectId: string
}

const Feedback = async ({ projectId }: FeedbackProps) => {
  const feedbacks = await db.feedback.findMany({
    where: {
      projectId,
    },
  })

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4 text-muted-foreground ml-2">
        Comentários
      </h2>
      <ul>
        {feedbacks.length > 0 ? (
          feedbacks.map((feedback) => (
            <li key={feedback.id} className="mb-4 px-4">
              <div className="flex items-center mb-1">
                <div className="text-primary font-bold mr-2">
                  {feedback.name}
                </div>
                <time
                  className="text-sm text-gray-500"
                  title={format(
                    new Date(feedback.createdAt),
                    "dd 'de' MMMM 'de' yyyy",
                    { locale: ptBR }
                  )}>
                  comentou{' '}
                  {formatDistance(new Date(), new Date(feedback.createdAt), {
                    locale: ptBR,
                  })}{' '}
                  atrás
                </time>
              </div>
              <p className="text-sm text-muted-foreground">
                {feedback.feedback}
              </p>
            </li>
          ))
        ) : (
          <p className="text-muted-foreground px-4">
            Não tem nenhum comentário cadastrado.
          </p>
        )}
      </ul>
    </div>
  )
}

export default Feedback
