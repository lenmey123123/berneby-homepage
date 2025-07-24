import { Injectable, Logger } from '@nestjs/common';
import { BlueprintDto } from './dto/blueprint.dto';
import { QuickConnectDto } from './dto/quick-connect.dto';
import * as nodemailer from 'nodemailer';

@Injectable()
export class ContactService {
  private readonly logger = new Logger(ContactService.name);
  private transporter: nodemailer.Transporter;

  constructor() {
    // Initialize email transporter
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || '',
        pass: process.env.SMTP_PASS || '',
      },
    });
  }

  async processBlueprint(blueprintDto: BlueprintDto) {
    this.logger.log(`Processing blueprint from ${blueprintDto.name} (${blueprintDto.email})`);
    
    try {
      // Temporarily disable email sending for testing
      // await this.sendBlueprintEmail(blueprintDto);
      this.logger.log('Email sending temporarily disabled for testing');
      
      // TODO: Store in database if needed
      
      return {
        success: true,
        message: 'Blueprint submitted successfully',
        data: {
          id: Date.now(),
          submittedAt: new Date().toISOString(),
          features: blueprintDto.features,
        },
      };
    } catch (error) {
      this.logger.error('Error processing blueprint:', error);
      throw error;
    }
  }

  async processQuickConnect(quickConnectDto: QuickConnectDto) {
    this.logger.log(`Processing quick connect from ${quickConnectDto.name} (${quickConnectDto.email})`);
    
    try {
      // Temporarily disable email sending for testing
      // await this.sendQuickConnectEmail(quickConnectDto);
      this.logger.log('Email sending temporarily disabled for testing');
      
      // TODO: Store in database if needed
      
      return {
        success: true,
        message: 'Quick connect submitted successfully',
        data: {
          id: Date.now(),
          submittedAt: new Date().toISOString(),
        },
      };
    } catch (error) {
      this.logger.error('Error processing quick connect:', error);
      throw error;
    }
  }

  private async sendBlueprintEmail(blueprintDto: BlueprintDto) {
    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@berneby.dev',
      to: process.env.CONTACT_EMAIL || 'contact@berneby.dev',
      subject: `Neue Projektanfrage: ${blueprintDto.name}`,
      html: `
        <h2>Neue Projektanfrage über Collaborative Blueprint</h2>
        <p><strong>Name:</strong> ${blueprintDto.name}</p>
        <p><strong>E-Mail:</strong> ${blueprintDto.email}</p>
        <p><strong>Unternehmen:</strong> ${blueprintDto.company || 'Nicht angegeben'}</p>
        <p><strong>Gewählte Features:</strong></p>
        <ul>
          ${blueprintDto.features.map(feature => `<li>${feature}</li>`).join('')}
        </ul>
        <p><strong>Nachricht:</strong></p>
        <p>${blueprintDto.message || 'Keine zusätzliche Nachricht'}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
    this.logger.log('Blueprint email sent successfully');
  }

  private async sendQuickConnectEmail(quickConnectDto: QuickConnectDto) {
    const mailOptions = {
      from: process.env.SMTP_USER || 'noreply@berneby.dev',
      to: process.env.CONTACT_EMAIL || 'contact@berneby.dev',
      subject: `Neue Kontaktanfrage: ${quickConnectDto.name}`,
      html: `
        <h2>Neue Kontaktanfrage über Quick Connect</h2>
        <p><strong>Name:</strong> ${quickConnectDto.name}</p>
        <p><strong>E-Mail:</strong> ${quickConnectDto.email}</p>
        <p><strong>Unternehmen:</strong> ${quickConnectDto.company || 'Nicht angegeben'}</p>
        <p><strong>Nachricht:</strong></p>
        <p>${quickConnectDto.message}</p>
      `,
    };

    await this.transporter.sendMail(mailOptions);
    this.logger.log('Quick connect email sent successfully');
  }
}
