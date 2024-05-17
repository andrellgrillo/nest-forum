import { EnvService } from '@/infra/env/env.service'
import { Injectable } from '@nestjs/common'
import { Redis } from '@upstash/redis'

@Injectable()
export class RedisService extends Redis {
  constructor(envService: EnvService) {
    super({
      url: envService.get('REDIS_URL'),
      token: envService.get('REDIS_TOKEN'),
    })
  }
}
