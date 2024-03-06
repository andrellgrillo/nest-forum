/* eslint-disable @typescript-eslint/ban-types */
import { Either, left, right } from '@/core/either'
import { AnswerCommentsRepository } from '../repositories/answer-comments-repository'
import { ResourceNotFoundError } from '../../../../core/errors/errors/resource-not-found'
import { NotAllowedError } from '../../../../core/errors/errors/not-allowed-error'

interface DeleteAnswerCommentsUseCaseRequest {
  authorId: string
  answerCommentId: string
}

type DeleteAnswerCommentsUseCaseResponse = Either<
  ResourceNotFoundError | NotAllowedError,
  {}
>

export class DeleteAnswerCommentsUseCase {
  constructor(private answerCommentsRepository: AnswerCommentsRepository) {}

  async execute({
    authorId,
    answerCommentId,
  }: DeleteAnswerCommentsUseCaseRequest): Promise<DeleteAnswerCommentsUseCaseResponse> {
    const answerComment =
      await this.answerCommentsRepository.findById(answerCommentId)
    if (!answerComment) {
      // console.log(answerComment)
      return left(new ResourceNotFoundError())
    }

    if (authorId !== answerComment.authorId.toString()) {
      return left(new NotAllowedError())
    }

    await this.answerCommentsRepository.delete(answerComment)
    return right({})
  }
}
