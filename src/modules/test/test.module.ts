import { Module } from '@nestjs/common';
import { TestResolver } from './test.query';

@Module({
  providers: [TestResolver],
  exports: [TestResolver],
})
export class TestModule {}
