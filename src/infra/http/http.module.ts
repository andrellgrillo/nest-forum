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
import { DeleteAnswerController } from './controllers/delete-answer-controller'
import { DeleteAnswerUseCase } from '@/domain/forum/applicaton/use-cases/delete-answer'
import { FetchQuestionAnswersController } from './controllers/fetch-question-answers-controller'
import { FetchQuestionAnswersUseCase } from '@/domain/forum/applicaton/use-cases/fetch-question-answers'
import { ChooseQuestionBetsAnswerController } from './controllers/choose-question_best-answer-controller'
import { ChooseQuestionBestAnswerUseCase } from '@/domain/forum/applicaton/use-cases/choose-question-best-answer'
import { CommentOnQuestionController } from './controllers/comment-on-question-controller'
import { CommentOnQuestionUseCase } from '@/domain/forum/applicaton/use-cases/comment-on-question'
import { DeleteQuestionCommentController } from './controllers/delete-question-comment-controller'
import { DeleteQuestionCommentUseCase } from '@/domain/forum/applicaton/use-cases/delete-comment-question'
import { CommentOnAnswerController } from './controllers/comment-on-answer.controller'
import { CommentOnAnswerUseCase } from '@/domain/forum/applicaton/use-cases/comment-on-answer'
import { DeleteAnswerCommentController } from './controllers/delete-answer-comment-controller'
import { DeleteAnswerCommentUseCase } from '@/domain/forum/applicaton/use-cases/delete-comment-answer'
import { FetchQuestionCommentsController } from './controllers/fetch-question-comments.controller'
import { FetchQuestionCommentsUseCase } from '@/domain/forum/applicaton/use-cases/fetch-question-comments'
import { FetchAnswerCommentsController } from './controllers/fetch-answer-comments-controller'
import { FetchAnswerCommentsUseCase } from '@/domain/forum/applicaton/use-cases/fetch-answer-comments'
import { UploadAttachmentController } from './controllers/upload-attachment-controller'
import { StorageModule } from '../storage/storage.module'
import { UploadAndCreateAttachmentUseCase } from '@/domain/forum/applicaton/use-cases/upload-and-create-attachment'
import { ReadNotificationController } from './controllers/read-notifications-controller'
import { ReadNotificationUseCase } from '@/domain/notification/application/use-cases/read-notification'

@Module({
  imports: [DatabaseModule, CryptographyModule, StorageModule],
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
    DeleteQuestionCommentController,
    CommentOnAnswerController,
    DeleteAnswerCommentController,
    FetchQuestionCommentsController,
    FetchAnswerCommentsController,
    UploadAttachmentController,
    ReadNotificationController,
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
    DeleteQuestionCommentUseCase,
    CommentOnAnswerUseCase,
    DeleteAnswerCommentUseCase,
    FetchQuestionCommentsUseCase,
    FetchAnswerCommentsUseCase,
    UploadAndCreateAttachmentUseCase,
    ReadNotificationUseCase,
  ],
})
export class HttpModule {}
