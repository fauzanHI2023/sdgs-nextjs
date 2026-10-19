import type { Schema, Struct } from '@strapi/strapi';

export interface MitracolaborationMitracolaboration
  extends Struct.ComponentSchema {
  collectionName: 'components_mitracolaboration_mitracolaborations';
  info: {
    displayName: 'mitracolaboration';
  };
  attributes: {
    logoCompany: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    namaPerusahaan: Schema.Attribute.Text;
  };
}

export interface PartnersdgLogoPartner extends Struct.ComponentSchema {
  collectionName: 'components_partnersdg_logo_partners';
  info: {
    displayName: 'logoPartner';
  };
  attributes: {
    logoPartnerSDG: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
  };
}

export interface ServicesServices extends Struct.ComponentSchema {
  collectionName: 'components_services_services';
  info: {
    displayName: 'services';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String;
    linkUrl: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface SharedCtaButton extends Struct.ComponentSchema {
  collectionName: 'components_shared_cta_buttons';
  info: {
    description: 'Tombol call-to-action dengan label dan link tujuan';
    displayName: 'CTA Button';
  };
  attributes: {
    label: Schema.Attribute.String & Schema.Attribute.Required;
    style: Schema.Attribute.Enumeration<['primary', 'secondary']> &
      Schema.Attribute.DefaultTo<'primary'>;
    url: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.DefaultTo<'/kontak'>;
  };
}

export interface SharedNavItems extends Struct.ComponentSchema {
  collectionName: 'components_shared_nav_items';
  info: {
    displayName: 'navItems';
  };
  attributes: {
    label: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export namespace Public {
    export interface ComponentSchemas {
      'mitracolaboration.mitracolaboration': MitracolaborationMitracolaboration;
      'partnersdg.logo-partner': PartnersdgLogoPartner;
      'services.services': ServicesServices;
      'shared.cta-button': SharedCtaButton;
      'shared.nav-items': SharedNavItems;
    }
  }
}
