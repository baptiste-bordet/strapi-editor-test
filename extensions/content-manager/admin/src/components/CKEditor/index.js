import React from 'react';
import PropTypes from 'prop-types';
import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import ClassicEditor from 'ckeditor-build-with-simple-upload-provider-strapi';
import IliadEditor from 'ckeditor-iliad';
import styled from 'styled-components';
import { auth } from 'strapi-helper-plugin';
import InputModalStepper
  from "../../../../../../.cache/plugins/strapi-plugin-upload/admin/src/containers/InputModalStepper";

const Wrapper = styled.div`
  .ck-editor__main {
    min-height: 200px;
    > div {
      min-height: 200px;
    }
  }
`;

const Editor = ({ onChange, name, value }) => {
  const jwtToken = auth.getToken();

  return (
    <Wrapper>
      <button>coucou</button>
      <CKEditor
        editor={ClassicEditor}
        data={value}
        onChange={(event, editor) => {
          const data = editor.getData();
          onChange({ target: { name, value: data } });
        }}
        config={{
          simpleUpload: {
            uploadUrl: `${strapi.backendURL}/upload`,
            headers: {
              Authorization: "Bearer " + jwtToken
            }
          }
        }}
      />
      {}
      <InputModalStepper
        isOpen={modal.isOpen}
        onClosed={handleClosed}
        step={modal.step}
        fileToEdit={modal.fileToEdit}
        filesToUpload={modal.filesToUpload}
        multiple={attribute.multiple}
        onInputMediaChange={handleChange}
        selectedFiles={value}
        onToggle={handleClickToggleModal}
        allowedTypes={attribute.allowedTypes}
      />
    </Wrapper>
  );
};

Editor.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
