import { API_URL } from "@function/wsCode";
import axios from "axios";
import { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';
const UploadService = async (formData) => {
  try {
    const response = await axios.post(
      `${API_URL}/api/article/upload`, formData
    );
    return response.data;
  } catch (error) {
    return error;
  }
}
function Editor({onChange}) {
  const quillRef = useRef(null);


  const imageHandler = async () => {
    const input = document.createElement('input');
  
    input.setAttribute('type', 'file');
    input.setAttribute('accept', 'image/*');
    input.click();
    input.onchange = async () => {
        let file = input && input.files ? input.files[0] : null;
        var formData = new FormData();
        formData.append("file", file);
        let quillObj = quillRef.current.getEditor();
        await UploadService(formData)
            .then((res) => {
                let data = `${API_URL}/images/article/` + res.data.url;
                const range = quillObj.getSelection();
                quillObj.editor.insertEmbed(range.index, 'image', data);
                onChange(quillObj.editor.scroll.domNode.innerHTML)
            })
            .catch((err) => {
                console.log(err)
                return false;
            });
    };
  }
  
  const modules = {
    toolbar:{
      container: [
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["bold", "italic", "underline", "strike", "blockquote"],
        [{ size: [] }],
        [{ font: [] }],
        [{ align: ["right", "center", "justify"] }],
        [{ list: "ordered" }, { list: "bullet" }],
        ["link", "image"],
        [{ color: ["red", "#785412"] }],
        [{ background: ["red", "#785412"] }]
        
      ]
      ,
      handlers: {
        "image": imageHandler
      }
    } 
    
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "link",
    "color",
    "image",
    "background",
    "align",
    "size",
    "font"
  ];

  const [code, setCode] = useState("");
  const handleProcedureContentChange = (content, delta, source, editor) => {
    onChange(content)
    console.log(content)
    setCode(code)
    //let has_attribues = delta.ops[1].attributes || "";
    //console.log(has_attribues);
    //const cursorPosition = e.quill.getSelection().index;
    // this.quill.insertText(cursorPosition, "★");
    //this.quill.setSelection(cursorPosition + 1);
  };

  return (
    <>
      <ReactQuill
        theme="snow"
        ref={quillRef}
        modules={modules}
        formats={formats}
        value={code}
        onChange={handleProcedureContentChange}
      />
    </>
  );
}

export default Editor;
