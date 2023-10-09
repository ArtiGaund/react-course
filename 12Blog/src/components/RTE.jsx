import React from 'react';
import { Editor } from '@tinymce/tinymce-react';
//this library embrace uncontrolled components and native html inputs
// wrapper component Controller is used to streamline the integration process while 
//still giving you the freedom to use a custom register
import { Controller } from 'react-hook-form'
// the control parameter comes from react hook form, this control is responsible to send
// the state from here to another form (component to form)
// this control is pass when we use this RTE()
export default function RTE({name, control, label, defaultValue =""}) {
    return (
      <div className='w-full'> 
      {label && <label className='inline-block mb-1 pl-1'>{label}</label>}
  
      <Controller
      name={name || "content"}
      control={control}
      render={({field: {onChange}}) => (
          <Editor
          initialValue={defaultValue}
          init={{
              initialValue: defaultValue,
              height: 500,
              menubar: true,
              plugins: [
                  "image",
                  "advlist",
                  "autolink",
                  "lists",
                  "link",
                  "image",
                  "charmap",
                  "preview",
                  "anchor",
                  "searchreplace",
                  "visualblocks",
                  "code",
                  "fullscreen",
                  "insertdatetime",
                  "media",
                  "table",
                  "code",
                  "help",
                  "wordcount",
                  "anchor",
              ],
              toolbar:
              "undo redo | blocks | image | bold italic forecolor | alignleft aligncenter bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent |removeformat | help",
              content_style: "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"
          }}
          onEditorChange={onChange}
          />
      )}
      />
  
       </div>
    )
  }