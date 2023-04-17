import { Badge, Col, Row } from 'antd'
import Button from 'components/Button'
import { UserContext } from 'context/userContext'
import moment from 'moment'
import { useRouter } from 'next/router'
import React, { useCallback, useContext, useEffect, useRef, useState } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { getOddsPreMatchAndInplay } from 'stores/chitiettran';
import { addTipArticle } from 'stores/article'
import Notication from 'helpers/Notication'
import Loading from 'project/Loading'
import ChooseMatch from './components/ChooseMatch'
import ConfirmChoose from './components/ConfirmChoose'
function AddTip({ dataMatchesAndLeagues = [] }) {
  const [LeagueChoose, setLeagueChoose] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false)
  const [analysis, setAnalysis] = useState(null);
  const [analysisChoose, setAnalysisChoose] = useState("");
  const { user } = useContext(UserContext);
  const [error, setError] = useState("");
  const router = useRouter()
  useEffect(() => {
    if (!LeagueChoose) return;
    getOddsPreMatchAndInplay(LeagueChoose.matchId)
      .then(res => {
        const data = res?.find(item => item.company == "Bet365");
        let d = [];
        if (data) {
          if (data.europeOdds?.[0]?.initialHome) {
            const item = []
            item.push("Chủ " + data.europeOdds[0].initialHome);
            if (data.europeOdds?.[0]?.initialDraw) {
              item.push("Hòa " + data.europeOdds[0].initialDraw)
            }
            if (data.europeOdds?.[0]?.initialAway) {
              item.push("Khách " + data.europeOdds[0].initialAway)
              d.push(item)
            }
          }

          if (data.handicap?.[0]?.initialHome) {
            const item = []
            item.push("Chủ " + data.handicap[0].initialHome);
            if (data.handicap?.[0]?.initialHandicap) {
              item.push("HDP " + data.handicap[0].initialHandicap)
            }
            if (data.handicap?.[0]?.initialAway) {
              item.push("Khách " + data.handicap[0].initialAway)
              d.push(item)
            }
          }

          if (data.overUnder?.[0]?.initialOver) {
            const item = []
            item.push("Tài " + data.overUnder[0].initialOver);
            if (data.overUnder?.[0]?.initialHandicap) {
              item.push("T/X " + data.overUnder[0].initialHandicap)
            }
            if (data.overUnder?.[0]?.initialUnder) {
              item.push("Xỉu " + data.overUnder[0].initialUnder)
              d.push(item)
            }
          }
          setAnalysis(d);
        }
      })
  }, [LeagueChoose])

  const handleSubmit = () => {
    if (!LeagueChoose || !analysisChoose || !title || !content) {
      setError("Vui lòng điền đầy đủ thông tin")
      return;
    }
    setLoading(true)
    addTipArticle({
      article: {
        title: title,
        content: content,
        group: router.query.id,
        user: user._id,
        matchInfo: JSON.stringify({ analysis: analysisChoose }),
        type: "1"
      },
      match: {
        matchId: LeagueChoose.matchId,
        leagueName: LeagueChoose.leagueName,
        leagueId: LeagueChoose.id,
        matchTime: LeagueChoose.matchTime,
        date: LeagueChoose.date,
        teamA: {
          "_id": LeagueChoose.homeId,
          "name": LeagueChoose.homeName,
          "avatar": LeagueChoose.homeIcon
        },
        teamB: {
          "_id": LeagueChoose.awayId,
          "name": LeagueChoose.awayName,
          "avatar": LeagueChoose.awayIcon

        }
      }
    })
      .then(res => {
        setLoading(false);
        if (res.status === "success") {
          router.push('/article/' + res.data.slugs);

        } else {
          Notication(res.message)
        }
      })
  }

  const handleChooseMatch = useCallback((item) => {
    setLeagueChoose(item);
    setAnalysisChoose(null)
    setAnalysis(null)
  }, [])
  return (
    <Row gutter={20}>
      {loading && <Loading />}
      <Col md={10}>
        <ChooseMatch
          LeagueChoose={LeagueChoose}
          handleChooseMatch={handleChooseMatch}
          dataMatchesAndLeagues={dataMatchesAndLeagues}
        />
      </Col>
      <Col md={14}>
        <ConfirmChoose
          analysisChoose={analysisChoose}
          LeagueChoose={LeagueChoose}
          analysis={analysis}
          setAnalysisChoose={setAnalysisChoose}
        />

        <div className="flex gap-2 p-2">
          <Badge style={{ background: "#52a22d" }} count={3} />
          <div className="font-bold">Nội dung</div>
        </div>
        <input value={title} onChange={(e) => setTitle(e.target.value)} className="border border-gray-400 p-2 w-full outline-none rounded-md" placeholder="Vui lòng nhập tiêu đề" />
        <textarea value={content} onChange={(e) => setContent(e.target.value)} className="border h-80 border-gray-400 rounded-md w-full p-2 outline-none mt-5" placeholder="Vui lòng nhập nội dung">
        </textarea>
        <div className="text-red-500 text-sm">{error}</div>
        <Button onClick={handleSubmit} className="mt-4" title="Gửi bài" />
      </Col>
    </Row>
  )
}

export default AddTip;