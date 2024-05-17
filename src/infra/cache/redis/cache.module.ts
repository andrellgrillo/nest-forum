import { EnvModule } from '@/infra/env/env.module'
import { Module } from '@nestjs/common'
import { CacheRepository } from '../cache-repository'
import { RedisCacherepository } from './redis-cache-repository'
import { RedisService } from './redis.service'

@Module({
  imports: [EnvModule],
  providers: [
    RedisService,
    {
      provide: CacheRepository,
      useClass: RedisCacherepository,
    },
  ],
  exports: [CacheRepository],
})
export class CacheModule {}
