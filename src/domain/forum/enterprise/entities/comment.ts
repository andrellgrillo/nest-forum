import { Entity } from '@/core/entities/entities'
import { UniqueEntityID } from '@/core/entities/unique-entity-id'

export interface CommentProps {
  authorId: UniqueEntityID
  content: string
  createdAt: Date
  updatedAt?: Date | null
}

export abstract class Comment<
  Props extends CommentProps,
> extends Entity<Props> {
  get authorId() {
    return this.props.authorId
  }

  get content() {
    return this.props.content
  }

  get createdAt() {
    return this.props.createdAt
  }

  get updatedAt() {
    return this.props.updatedAt
  }

  private touch() {
    this.props.updatedAt = new Date()
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  set content(content: string) {
    this.props.content = content
    this.touch()
  }
}
