# Model Availability Test
Method: Execute tests in sequence
Testing tool: Apifox

## Deepseek V3
```bash
curl --location --request POST 'http://localhost:9000/api/browser/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "Visit Weibo, provide today's trending report",
    "llm_config": {
        "model_name": "deepseek-chat",
        "api_key": "*********",
        "api_url": "https://api.deepseek.com/v1"
    }
}'
```
Test result: ✅

Test response (partial):
Execution effect (last entry):
```json
{
                    "extracted_content": "Today's top 10 trending topics on Weibo are:\n1. Huang Zitao wakes up at 6 AM to bathe sheep (280,222 searches)\n2. Zhang Kaiyi Please remove the toilets in women's restrooms (Peaked at 10:28)\n3. Zhe Lainv sings Dan Yichun's珠玉 (175,091 searches)\n4. Student in wheelchair goes to exam venue, classmates help voluntarily (177,479 searches)\n5. Xiao Shenyang's daughter debut photo (385,403 searches)\n6. Flight attendant reveals Lu Han and Guan Xiaotong traveled to Japan together before official announcement (58,896 searches)\n7. Yan Yan Jiang塌房 (Peaked in the morning)\n8. Linjiang Immortal Drama Group (167,546 searches)\n9. Shen Teng Who understands when a mouse walks with square steps (133,689 searches)\n10. Two Labubu figures that sold for high prices were once his (Peaked at 08:06)",
                    "url": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F",
                    "error": null
                }
```
Execution information:
```json
{
 "total_duration_seconds": 96.73932790756226,
            "total_tokens": 24909,
            "is_successful": true,
            "is_done": true,
            "number_of_steps": 5
}
```
## DeepSeek R1
```bash
curl --location --request POST 'http://localhost:9000/api/browser/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "Visit Weibo, provide today's top five trending topics",
    "llm_config": {
        "model_name": "deepseek-reasoner",
        "api_key": "*********",
        "api_url": "https://api.deepseek.com/v1"
    }
}'
```
Test result: ✅--
Test response (partial): Execution effect (last entry):
```json
{
"extracted_content": "Today's top five trending topics on Weibo:\n1. Bao Wenjing封肚 (07:21 peak)\n2. Yan Yan Jiang塌房 (morning dominated)\n3. Zhang Kaiyi Please remove the toilets in women's restrooms (10:29 peak)\n4. Four major factors behind Labubu's explosion (1,166,334热度)\n5. Deng Ziqi had not received royalties for 6 years (12:37 peak)",
                    "url": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F",
                    "error": null
}
```
Execution information:
```json
{
"total_duration_seconds": 254.1361768245697,
            "total_tokens": 18893,
            "is_successful": true,
            "is_done": true,
            "number_of_steps": 3
}
Feedback: Here the task was modified to "visit Weibo, provide today's top five trending topics" because the task "visit Weibo, provide today's trending report" executes very slowly, with single steps taking 300s+ which is unacceptable.
```
## qwen3-235b-a22b
```bash
curl --location --request POST 'http://localhost:9000/api/browser/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "Visit Weibo, provide today's trending report",
    "llm_config": {
        "model_name": "qwen3-235b-a22b",
        "api_key": "*********",
        "api_url": "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
}'
```
Test result: ✅
Test response (partial): Execution effect (last entry):
```json
{
                    "extracted_content": "Today's trending report:\n1. Open cooperation is the righteous path\n2. Two Labubu figures that sold for high prices were once his\n3. Lines from Zang Hai Zhuan spread to Taiwan\n4. China's foreign trade steadily progresses in a complex environment\n5. Zhang Kaiyi Please remove the toilets in women's restrooms\n6. Xiao Shenyang's daughter debut photo\n7. Early collectors of 1.08 million Labubu speak out\n8. Jay Chou's team responds to spending 3 billion NT dollars to buy 4 floors\n9. Zhu Xian\n10. Trump announces immigration gold card website launch\n11. Labubu spawns a huge peripheral industry chain\n12. Luo Shuaiyu incident\n13. Seemingly resting but actually consuming qi and blood\n14. Pop Mart\n15. Flower-shaped girl murder case scheduled\n16. Huang Zitao wakes up at 6 AM to bathe sheep\n17. Yi Yangqianxi Guangzhou concert venue\n18. Huan Yu scheduled",
                    "url": "https://weibo.com/newlogin?tabtype=search&gid=&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F",
                    "error": null
                }
```
Execution information:
```json
{
    "total_duration_seconds": 34.543779611587524,
            "total_tokens": 15970,
            "is_successful": true,
            "is_done": true,
            "number_of_steps": 3
}
```
## qwen3-32b
```bash
curl --location --request POST 'http://localhost:9000/api/browser/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "Visit Weibo, provide today's trending report",
    "llm_config": {
        "model_name": "qwen3-32b",
        "api_key": "*********",
        "api_url": "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
}'
```
Test result: ✅
Test response (partial): Execution effect (last entry):
```json
{
                    "extracted_content": "Here is today's Weibo hot topics report:\n\n1. Huang Zitao wakes up at 6 AM to bathe sheep - 250,162 mentions\n2. Zhang Kaiyi Please remove the toilets in women's restrooms - 10 mentions\n3. Zhe Lainv sings Dan Yichun's珠玉 - 184,724 mentions\n4. JD Esports Day draws Saudi Esports World Cup tickets - 60,945 mentions\n5. Mercedes-Benz - 573,226 mentions\n6. Xiao Shenyang's daughter debut photo - 64,347 mentions\n7. Flight attendant reveals Lu Han and Guan Xiaotong traveled to Japan together before official announcement - 100 mentions\n8. Yan Yan Jiang塌房 - 155 mentions\n9. NIO chairman responds to employee wage protests - 135,728 mentions\n10. Ministry of Industry and Information Technology responds to 60-day payment terms for car companies - 69,472 mentions",
                    "url": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F",
                    "error": null
                }
```
Execution information:
```json
{
     "total_duration_seconds": 53.5604522228241,
            "total_tokens": 23055,
            "is_successful": true,
            "is_done": true,
            "number_of_steps": 4
}
```
## qwen3-14b
```bash
curl --location --request POST 'http://localhost:9000/api/browser/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "Visit Weibo, provide today's trending report",
    "llm_config": {
        "model_name": "qwen3-14b",
        "api_key": "*********",
        "api_url": "https://dashscope.aliyuncs.com/compatible-mode/v1"
    }
}'
```
Test result: ✅
Test response (partial): Execution effect (last entry):
```json
{
                    "extracted_content": "Today's Weibo trending report:\n\n1. #Are college entrance exam papers really printed in prison# - 2,279 discussions\n   - Related link: https://weibo.com/ttarticle/p/show?id=2309405176415577833919\n\n2. #Los Angeles Chinese residents say they don't dare visit curfew areas# - 628 discussions\n   - Related link: https://weibo.com/1496814565/Pw9VXxdXW\n\n3. #Fall into Our Hot Love (Sihasiha)# - 76,000 discussions\n   - Related link: https://video.weibo.com/show?fid=1034:5174838197944429&mark_id=999_reallog_mark_ad%3A999%7CWeiboADNatural\n\n4. #Trump deploys 2,000 National Guards to California# - 152 discussions\n   - Related link: https://weibo.com/1671109627/PwalgksRe\n\n5. #College entrance exam加油# - 1,386 discussions\n   - Related link: https://video.weibo.com/show?fid=1034:5175942071648284\n\nTrending search list:\n\n1. Huang Zitao wakes up at 6 AM to bathe sheep - 238,607 discussions\n2. Zhang Kaiyi Please remove the toilets in women's restrooms - 10:28 discussions (peak)\n3. Xiao Shenyang's daughter debut photo - 423,430 discussions\n4. High-quality Labubu must be taken down - 141,233 discussions\n5. Flight attendant reveals Lu Han and Guan Xiaotong traveled to Japan together before official announcement - 63,961 discussions\n6. Yan Yan Jiang塌房 - morning dominated\n7. Pacers bench players excel - 100,028 discussions\n8. Taylor Swift suspected of secret marriage - 01:50 peak\n9. Liu Zhimin Huang Xuanchen - 10:09 peak\n10. Thunder vs Pacers - 65,284 discussions",
                    "url": "https://weibo.com/newlogin?tabtype=weibo&gid=102803&openLoginLayer=0&url=https%3A%2F%2Fweibo.com%2F",
                    "error": null
                }
```
Execution information:
```json
{
            "total_duration_seconds": 79.28797626495361,
            "total_tokens": 23888,
            "is_successful": true,
            "is_done": true,
            "number_of_steps": 4
}
```

## Doubao (Volcano Engine)
Testing multiple model types

Test request format as follows:

```bash
curl --location --request POST 'http://localhost:9000/api/browser/task' \
--header 'Content-Type: application/json' \
--data-raw '{
    "prompt": "Check if www.baidu.com is running normally",
    "llm_config": {
        "model_name": [model_name],
        "api_key": "*********",
        "api_url": "https://ark.cn-beijing.volces.com/api/v3"
    }
}'
```

| Model_name | Available | Function Call | Json_mode | Error Message | Notes |
| :---: | :---: | :---: | :---: | :---: | :---: |
| doubao-1-5-thinking-pro-m-250428 | ✅ | ✅ | ❌ | Bad_2 | Need to set response_type to raw |
| doubao-seed-1-6-250615 | ✅ | ✅ | ✅ | | |
| doubao-seed-1-6-thinking-250615 | ✅ | ✅ | ✅ | | |
| doubao-seed-1-6-flash-250615 | ✅ | ✅ | ✅ | | |
| doubao-1-5-pro-32k-250115 | ✅ | ✅ | X✅? | Bad_1 | Need to set use_vision to False (no multimodal support) |
| doubao-lite-128k-240828 | ✅ | ✅ | X✅? | Bad_1 | Poor performance |
| deepseek-v3-250324 | ✅ | ✅ | ❌? | | |
| deepseek-r1-distill-qwen-32b-250120 | ✅ | ❌ | ❌? | | |

Default configuration error messages table

| Error ID | Detailed Info Template | Notes |
| :---: | :---: | :---: |
| Bad_1 | Error code: 400 - {'error': {'code': 'InvalidParameter', 'message': 'One or more parameters specified in the request are not valid. Request id: {id}', 'param': '', 'type': 'BadRequest'}} | |
| Bad_2 | Error code: 400 - {'error': {'code': 'InvalidParameter', 'message': 'The parameter `response_format.type` specified in the request are not valid: `json_object` is not supported by this model. Request id: {id}', 'param': 'response_format.type', 'type': 'BadRequest'}} | |
| | | |