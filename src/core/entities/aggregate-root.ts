import { DomainEvent } from '../events/domain-event'
import { DomainEvents } from '../events/domain-events'
import { Entity } from './entities'

export abstract class AggregateRoot<Props> extends Entity<Props> {
  private _domainsEvents: DomainEvent[] = []

  get domainEvents(): DomainEvent[] {
    return this._domainsEvents
  }

  protected addDomainEvent(domainEvent: DomainEvent): void {
    this._domainsEvents.push(domainEvent)
    DomainEvents.markAggregateForDispatch(this)
  }

  public clearEvents() {
    this._domainsEvents = []
  }
}
