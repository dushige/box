#! /bin/bash

user=jarone
pwd=jarone123
vhost=jarone_vhost
exchange=jarone_exchange
queue=jarone_queue
route_key='jarone.something.*'

echo '创建用户'
rabbitmqctl add_user ${user} ${pwd}
echo '设置用户为管理员'
rabbitmqctl set_user_tags ${user} administrator
echo '创建vhost'
rabbitmqctl add_vhost ${vhost}
echo '设置vhost到用户的权限'
rabbitmqctl set_permissions -p ${vhost} ${user} '.*' '.*' '.*'
echo '创建exchange'
rabbitmqctl eval 'rabbit_exchange:declare({resource, <<"'${vhost}'">>, exchange, <<"'${exchange}'">>}, topic, true, false, false, []).'
echo '创建queue'
rabbitmqctl eval 'rabbit_amqqueue:declare({resource, <<"'${vhost}'">>, queue, <<"'${queue}'">>}, true, false, [], none).'
echo '绑定queue到exchange'
rabbitmqctl eval 'rabbit_binding:add({binding, {resource, <<"'${vhost}'">>, exchange, <<"'${exchange}'">>}, <<"'${route_key}'">>, {resource, <<"'${vhost}'">>, queue, <<"'${queue}'">>}, []}).'
