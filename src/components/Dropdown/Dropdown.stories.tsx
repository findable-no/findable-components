import React, { useState } from 'react';
import { Meta, Story } from '@storybook/react';

import { Dropdown, DropdownComponentProps, Item } from './Dropdown';
import { SelectItem } from './SelectItem';

export default {
  title: 'Dropdown',
} as Meta;

const DropdownTemplate = (props: DropdownComponentProps) => {
  const [value, setValue] = useState<string | null>(null);

  return (
    <Dropdown
      {...props}
      value={value}
      setValue={setValue}
      label={props.label}
    />
  );
};

export const DropdownComponent: Story<DropdownComponentProps> = DropdownTemplate.bind(
  {}
);

DropdownComponent.args = {
  data: [
    {
      value: '200',
      label: '200 - Bygning, generelt',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      labelHeader: '20 - branndokumentasjon',
      description:
        'Omfatter bærende vegger i betong, mur, bindingsverk mv. For bærende bindingsverksvegger omfatter bygningsdelen yttervegg fra og med innvendig plate/panel til og med vindtetting (klimaskille). Utvendig kledning og overflate, se 235. Innvendig kledning og overflate, se 236.',
    },
    {
      value: '117',
      label: '117 - Adresselister (leverandører)',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      labelHeader: '17 - Johnnytester',
      description: '',
    },
    {
      value: '400',
      label: '400 - Elkraft, generelt',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      description:
        'Omfatter elkrafttekniske installasjoner for drift av bygning og virksomhet i bygning.',
    },
    {
      value: '111',
      label: '111 - Kjøpskontrakter',
      group: '',
      description: '',
    },
    {
      value: '112',
      label: '112 - Leiekontrakter',
      group: '',
      description: '',
    },
    {
      value: '113',
      label: '113 - Drifts- og vedlikeholdsavtaler',
      group: '',
      description: '',
    },
  ] as Item[],
  name: 'building-categories',
  label: 'Building Categories',
  required: true,
};

export const SelectItemComponent = () => (
  <SelectItem
    {...{
      value: '200',
      label: '200 - Bygning, generelt',
      group: 'Automatisk forslag til sortering',
      suggestionTxt: 'forslag',
      labelHeader: '20 - branndokumentasjon',

      description:
        'Omfatter bærende vegger i betong, mur, bindingsverk mv. For bærende bindingsverksvegger omfatter bygningsdelen yttervegg fra og med innvendig plate/panel til og med vindtetting (klimaskille). Utvendig kledning og overflate, se 235. Innvendig kledning og overflate, se 236.',
    }}
  />
);
