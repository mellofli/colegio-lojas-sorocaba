import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const DESTINATION_EMAIL = 'colegiomaconicoGlesp@outlook.com';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { nome, email, telefone, assunto, mensagem } = request.body;

    if (!nome || !email || !mensagem) {
      return response.status(400).json({ error: "Nome, e-mail e mensagem são obrigatórios." });
    }

    const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: 'Novo contato pelo site do Colégio Maçônico',
      html: `
        <h1>Novo Contato pelo Site</h1>
        <p><strong>Data/Hora:</strong> ${now}</p>
        <hr />
        <p><strong>Nome:</strong> ${nome}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Assunto:</strong> ${assunto || 'Contato Geral'}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${mensagem.replace(/\n/g, '<br>')}</p>
      `,
    });

    return response.status(200).json({ message: "E-mail enviado com sucesso." });
  } catch (error) {
    console.error("Error sending contact email:", error);
    return response.status(500).json({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." });
  }
}
