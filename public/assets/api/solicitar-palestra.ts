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
    const { 
      nomeSolicitante, 
      email, 
      telefone, 
      loja, 
      cargo, 
      palestraSolicitada, 
      palestrante, 
      dataPretendida, 
      observacoes 
    } = request.body;

    if (!nomeSolicitante || !email || !palestraSolicitada) {
      return response.status(400).json({ error: "Nome, e-mail e palestra solicitada são obrigatórios." });
    }

    const now = new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' });

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: DESTINATION_EMAIL,
      replyTo: email,
      subject: 'Nova solicitação de palestra pelo site do Colégio Maçônico',
      html: `
        <h1>Nova Solicitação de Palestra</h1>
        <p><strong>Data/Hora:</strong> ${now}</p>
        <hr />
        <p><strong>Solicitante:</strong> ${nomeSolicitante}</p>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${telefone || 'Não informado'}</p>
        <p><strong>Loja:</strong> ${loja || 'Não informada'}</p>
        <p><strong>Cargo:</strong> ${cargo || 'Não informado'}</p>
        <p><strong>Palestra:</strong> ${palestraSolicitada}</p>
        <p><strong>Palestrante:</strong> ${palestrante || 'Qualquer disponível'}</p>
        <p><strong>Data Pretendida:</strong> ${dataPretendida || 'A definir'}</p>
        <p><strong>Observações:</strong></p>
        <p>${(observacoes || 'Sem observações').replace(/\n/g, '<br>')}</p>
      `,
    });

    return response.status(200).json({ message: "Solicitação enviada com sucesso." });
  } catch (error) {
    console.error("Error sending lecture request:", error);
    return response.status(500).json({ error: "Falha ao enviar a solicitação. Tente novamente mais tarde." });
  }
}
