import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService) {}

  async checkUser(id: number) {
    const user = await this.prisma.user.findUnique({
      where: {
        id
      }
    });

    return user;
  }
}
