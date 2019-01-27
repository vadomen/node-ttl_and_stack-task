# NodeJS test task with TTL and stack

### NPM commands

| Command | Explanation |
| ------ | ------ |
| test | test all functionality |
| testStack | test stack functionality |
| testStore | test store functionality |
| start | start server |

### Routes:

##### Stack

| Method | Route | Explanation |
| ------ | ------ | ------ |
| POST | **/stack/add** | add value to stack |
| GET | **/stack/get** | get value from stack |



##### Store

| Method | Route | Explanation |
| ------ | ------ | ------ |
| POST | **/store/add** | add key/value to store |
| GET | **/store/get** | get value from store by key |
| DELETE | **/store/delete** | Delete key from store |

#### Request fields

##### Stack

| Method | Field | Format | Details |
| ------ | ------ | ------ | ------ |
| **/store/add** | value | Any | Value to add into the stack |
| **/store/get** | - | - | No fields required |


 ##### Store

 | Field | Format | Details | Required |
 | ------ | ------ | ------ | ------ |
 | key | String | TTL key | Yes |
 | value | String | Value to write by key| No |
 | ttl | Int | TTL time in milliseconds| No |

 **/store/get**
 | Field | Format | Details | Required |
 | ------ | ------ | ------ | ------ |
 | key | String | TTL key | Yes |

 **/store/delete**
 | Field | Format | Details | Required |
 | ------ | ------ | ------ | ------ |
 | key | String | TTL key | Yes |
