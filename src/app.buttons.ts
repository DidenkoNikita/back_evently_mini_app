import { Markup } from "telegraf";

export function actionButtons (){
  return Markup.keyboard(
    [
      Markup.button.webApp('🚀 Go to dating', process.env.MINI_APP_URL ),
      Markup.button.webApp('👤 Edit profile', process.env.MINI_APP_URL),
    ],  
    {
      columns: 3
    }
  )
}

export function registerButton() {
  return Markup.inlineKeyboard(
    [
      Markup.button.webApp('🙄 Sign up', `${process.env.MINI_APP_URL}/sign_up`)
    ]
  );
}