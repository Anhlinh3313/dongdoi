import React, { useCallback, useContext, useRef, useState } from 'react'
import styled from 'styled-components';
import dynamic from "next/dynamic";
import Button from 'components/Button';
import { UserContext } from 'context/userContext';
import { useRouter } from 'next/router';
import { addArticle } from 'stores/article'
import Notication from 'helpers/Notication'
import Loading from 'project/Loading';
function AddArticle() {
  const Editor = dynamic(() => import("../Editor"), { ssr: false });
  const refData = useRef(null);
  const [error, setError] = useState("")
  const refTitle = useRef(null);
  const { user } = useContext(UserContext);
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const handleSubmit = () => {
    if (!refTitle.current || !refData.current) {
      setError("Vui lòng điền đầy đủ thông tin")
      return;
    }
    setLoading(true)
    addArticle({
      title: refTitle.current,
      content: refData.current,
      group: router.query.id,
      user: user._id,
    })
      .then(res => {
        setLoading(false);
        if (res.status === "success") {
          router.push('/article/' + res.data.slugs)
        } else {
          Notication(res.message)
        }
      })
  }

  const handleChange = useCallback((v) => {
    refData.current = v;
  }, [])
  return (
    <Wrapper className="mt-4">
      {loading && <Loading />}
      <input onChange={(e) => refTitle.current = e.target.value} className="input placeholder:text-xs mb-4" placeholder="Vui lòng nhập tiêu đề" />
      <Editor
        onChange={handleChange}
      />
      <div className="text-red-500 text-sm">{error}</div>
      <div className="text-center w-60 m-auto">
        <Button title="Gửi bài" className="mt-3 w-56" onClick={handleSubmit} />
      </div>
    </Wrapper>
  )
}

export default AddArticle;

const Wrapper = styled.div`
  > .input {
    width: 100%;
    border: solid 1px #ccc;
    height: 36px;
    padding: 5px 10px;
    border-radius: 4px;
    color: #333;
    outline: none;
  }
`;