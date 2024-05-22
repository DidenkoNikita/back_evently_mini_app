import { AppService } from './app.service';
import { Hears, InjectBot, Start, Update } from 'nestjs-telegraf';
import { Context, Telegraf } from 'telegraf';
import { actionButtons, registerButton } from './app.buttons';

@Update()
export class AppUpdate {
  constructor(
    @InjectBot() private readonly bot: Telegraf<Context>, 
    private readonly appService: AppService
  ) {}

  @Start()
  async startCommand(ctx: Context) {
    // console.log(process.env.MINI_APP_URL);
    console.log(typeof ctx.chat.id);

    const user = await this.appService.checkUser(ctx.chat.id);
    
    console.log('user', user);
    

    // await ctx.message('550200004', 'Вадик лох')

    // await ctx.sendMessage('Вадик лох', )
    // await ctx.telegram.sendMessage(6331221746, 'Гоша лох')
    if (user) {
      await ctx.reply('Welcome to evently!', actionButtons())
    } else {
      await ctx.reply('It seems that this is your first time visiting this mini application, register using the button below:', registerButton());
    }
  }

  // @Hears('🚀 Go to dating:') 
  // async routeToDating(ctx: Context) {
  //   // await ctx.
  // }
}
