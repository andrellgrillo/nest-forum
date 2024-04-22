import { Module } from '@nestjs/common'
import { CreateAccountController } from './controllers/create-account.controller'
import { AuthenticateController } from './controllers/authenticate-controller'
import { CreateQuestionController } from './controllers/create-question.controller'
import { FetchRecentQuestionsController } from './controllers/fetch-recent-questions-controller'
import { DatabaseModule } from '../database/database.module'
import { CreateQuestionUseCase } from '@/domain/forum/applicaton/use-cases/create-question'
import { FetchRecentQuestionsUseCase } from '@/domain/forum/applicaton/use-cases/fetch-recent-questions'
import { RegisterStudentsUseCase } from '@/domain/forum/applicaton/use-cases/register-students'
import { AuthenticateStudentUseCase } from '@/domain/forum/applicaton/use-cases/authenticate-student'
import { CryptographyModule } from '../cryptography/cryptography.module'
import { GetQuestionBySlugController } from './controllers/get-question-by-slug.controller'
import { GetQuestionBySlugUseCase } from '@/domain/forum/applicaton/use-cases/get-question-by-slug'
import { EditQuestionController } from './controllers/edit-question-controller'
import { EditQuestionUseCase } from '@/domain/forum/applicaton/use-cases/edit-question'
import { DeleteQuestionController } from './controllers/delete-question-controller'
import { DeleteQuestionUseCase } from '@/domain/forum/applicaton/use-cases/delete-question'
import { AnswerQuestionController } from './controllers/answer-question-controller'
import { AnswerQuestionUseCase } from '@/domain/forum/applicaton/use-cases/answer-question'
import { EditAnswerController } from './controllers/edit-answer-controller'
import { EditAnswerUseCase } from '@/domain/forum/applicaton/use-cases/edit-answer'
import { DeleteAnswerController } from './controllers/delete - answer-controller'
import { DeleteAnswerUseCase } from '@/domain/forum/applicaton/use-cases/delete-answer'
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers-controller'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/applicaton/use-cases/fetch-question-answers'
import { ChooseQuestionBetsAnswerController } from './controllers/choose-question_best-answer-controller'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/applicaton/use-cases/choose-question-best-answer'
import { CommentOnQuestionController } from './controllers/comment-on-question-controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/applicaton/use-cases/comment-on-question'

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
    GetQuestionBySlugController,
    EditQuestionController,
    DeleteQuestionController,
    AnswerQuestionController,
    EditAnswerController,
    DeleteAnswerController,
    FetchQuestionAnswersController,
    ChooseQuestionBetsAnswerController,
    CommentOnQuestionController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentsUseCase,
    AuthenticateStudentUseCase,
    GetQuestionBySlugUseCase,
    EditQuestionUseCase,
    DeleteQuestionUseCase,
    AnswerQuestionUseCase,
    EditAnswerUseCase,
    DeleteAnswerUseCase,
    FetchQuestionAnswersUseCase,
    ChooseQuestionBestAnswerUseCase,
    CommentOnQuestionUseCase,
  ],
})
export class HttpModule {}
