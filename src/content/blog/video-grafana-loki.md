---
title: 'Grafana Loki の索引と総当たり'
description: 'Loki はラベルだけを索引にし、本文は圧縮して置くだけにする。その設計が LogQL のどの部分の速さに出るかを、1 本のクエリを行ごとに読んで追う'
pubDate: '2026-10-18'
video: 'grafana-loki'
duration: '8:17'
---

Grafana Loki は、ラベルだけを索引にして、ログの本文は圧縮して置くだけにします。この設計が LogQL のどの部分の速さに出るかを、1 本のクエリを行ごとに読んで追います。ずんだもんが質問し、四国めたんが答える形式で、8:17 です。

題材のクエリは、Claude Code のテレメトリ(OpenTelemetry)を Loki に送り、1 日の API 費用を合計するものです。

```logql
sum(
  sum_over_time(
    {service_name="claude-code"}
      | event_name="api_request"
      | unwrap cost_usd
    [24h]
  )
)
```

## 出典

- https://grafana.com/docs/loki/latest/get-started/overview/
- https://grafana.com/docs/loki/latest/get-started/architecture/
- https://grafana.com/docs/loki/latest/get-started/components/
- https://grafana.com/docs/loki/latest/get-started/labels/
- https://grafana.com/docs/loki/latest/get-started/labels/structured-metadata/
- https://grafana.com/docs/loki/latest/send-data/otel/
- https://grafana.com/docs/loki/latest/query/
- https://grafana.com/docs/loki/latest/query/metric_queries/
- https://grafana.com/docs/loki/latest/configure/(ingester の chunk_target_size・chunk_idle_period・max_chunk_age・chunk_encoding)

音声は VOICEVOX:ずんだもん / VOICEVOX:四国めたん、イラストは VOICEVOX 公式(© SSS LLC)です。
