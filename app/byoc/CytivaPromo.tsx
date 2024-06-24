import React from 'react';
import * as FEAAS from '@sitecore-feaas/clientside/react';

interface CytivaPromoProps {
    imageUrl: string;
    text: string;
    url: string;
    urlText: string;
}

export const CytivaPromo = (props: CytivaPromoProps): JSX.Element => {
    return (
      <div className="component promo col-12 link-button">
        <div className="component-content">
            <div className="field-promoicon">
            {props.imageUrl && <img alt="" width="2000" height="1116" src={props.imageUrl} />}
            </div>
            <div className="promo-text">
            <div>
                <div className="field-promotext">
                <div>
                    <p>{props.text}</p>
                </div>
                </div>
            </div>
            {props.url && (
                <div className="field-promolink">
                <a href={props.url} title={props.urlText} target="_blank">
                    {props.urlText}
                </a>
                </div>
            )}
            </div>
        </div>
      </div>
    );
};

FEAAS.External.registerComponent(CytivaPromo, {
    name: 'CytivaPromo',
    title: 'Cytiva Promo',
    description: 'Cytiva Promo',
    thumbnail: 'https://cdn.cytivalifesciences.com.cn/api/public/content/digi-33587-original',
    group: 'Cytiva-Design-Book',
    required: ['text', 'imageUrl', 'url'],
    properties: {
      imageUrl: {
        type: 'string',
      },
      text: {
        type: 'string',
      },
      url: {
        type: 'string',
      },
      urlText: {
        type: 'string',
      },
    },
    ui: {
      text: {
        'ui:autofocus': true,
        'ui:emptyValue': '',
        'ui:placeholder': 'Write a great Promo text 2',
      },
    },
});