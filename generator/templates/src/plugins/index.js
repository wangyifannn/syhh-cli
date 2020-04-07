<%_ if (options.dockerIgnore) { _%>
import './.dockerignore'
<%_ } _%>
  
<%_ if (options.envAlpha) { _%>
import './.env.alpha'
<%_ } _%>

dockerCpAddress= <%_ options.dockerCpAddress _%>