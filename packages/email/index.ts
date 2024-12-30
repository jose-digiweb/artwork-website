import { env } from '@bangeyhodhy/env';
import { Resend } from 'resend';

export const resend = new Resend(env.RESEND_API_KEY);

export { ContactEmailTemplate } from './templates/contact';
