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

@Module({
  imports: [DatabaseModule, CryptographyModule],
  controllers: [
    CreateAccountController,
    AuthenticateController,
    CreateQuestionController,
    FetchRecentQuestionsController,
  ],
  providers: [
    CreateQuestionUseCase,
    FetchRecentQuestionsUseCase,
    RegisterStudentsUseCase,
    AuthenticateStudentUseCase,
  ],
})
export class HttpModule {}
